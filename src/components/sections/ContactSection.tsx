import { useState } from "react";
import { contactIntro, motifOptions, sexeOptions } from "../../data/contact"
import { siteConfig } from "../../data/siteConfig";
import Button from "../atoms/Button";
interface ContactFormData {
  fullName: string;
  email: string;
  profession: string;
  sexe: string;
  motif: string;
  message: string;
}

const emptyForm: ContactFormData = {
  fullName: "",
  email: "",
  profession: "",
  sexe: "",
  motif: "",
  message: "",
};

export default function ContactSection() {
  const [form, setForm] = useState<ContactFormData>(emptyForm);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Formulaire de contact soumis :", form);
  };

  return (
    <section id="contact" className="py-15 px-2 bg-base-300">
      <div className="grid grid-cols-1  md:grid-cols-[3fr_7fr] gap-20 max-w-6xl justify-around mx-auto items-center ">
        <div>
          <p className="text-xs tracking-widest uppercase text-secondary mb-2">
            {contactIntro.eyebrow}
          </p>
          <h2 className="text-2xl font-medium mb-4">{contactIntro.title}</h2>
          <p className="text-sm text-base-content/70 mb-6">{contactIntro.paragraph}</p>

          <p className="text-sm">{siteConfig.email}</p>
          <p className="text-sm">{siteConfig.phone}</p>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col gap-8  bg-base-200  rounded-2xl p-6 ">
  {/* Niveau 1 : les 2 colonnes, côte à côte, chacune exactement 50% */}
  <div className="flex flex-col md:flex-row gap-4">
    <div className="flex flex-col gap-8 flex-1">
      <label className="form-control w-full">
        <span className="label-text text-sm mb-1"> Nom</span>
        <input type="text" name="fullName" value={form.fullName} onChange={handleChange} placeholder="Votre nom complet" required className=" border-b border-secondary outline-none w-full focus:border-primary focus:outline-primary" />
      </label>

      <label className="form-control w-full">
        <span className="label-text text-sm mb-1">E-mail</span>
        <input type="email" name="email" value={form.email} onChange={handleChange} placeholder="Votre adresse mail" required className="border-b border-secondary outline-none w-full focus:border-primary focus:outline-primary" />
      </label>

      <label className="form-control w-full">
        <span className="label-text text-sm mb-1">Profession</span>
        <input type="text" name="profession" value={form.profession} onChange={handleChange} placeholder="Indiquez votre profession" className="border-b border-secondary outline-none w-full focus:border-primary " />
      </label>
    </div>

    <div className="flex flex-col gap-8 flex-1">
      <label className="form-control w-full">
        <span className="label-text text-sm mb-1">Sexe</span>
        <select name="sexe" value={form.sexe} onChange={handleChange} required className="border-b border-secondary outline-none w-full focus:border-primary focus:outline-primarys">
          <option value="" disabled>Sélectionner</option>
          {sexeOptions.map((option) => (
            <option key={option.value} value={option.value}>{option.label}</option>
          ))}
        </select>
      </label>

      <label className="form-control w-full">
        <span className="label-text text-sm mb-1">Motif</span>
        <select name="motif" value={form.motif} onChange={handleChange} required className="border-b border-secondary outline-none w-full focus:border-primary focus:outline-primary">
          <option value="" disabled>Sélectionner</option>
          {motifOptions.map((option) => (
            <option key={option.value} value={option.value}>{option.label}</option>
          ))}
        </select>
      </label>

      <label className="form-control w-full">
        <span className="label-text text-sm mb-1">Message</span>
        <textarea name="message" value={form.message} onChange={handleChange} required rows={4} placeholder="Dites nous clairement ce que votre motif" className=" p-2 border border-secondary rounded-lg  outline-none w-full focus:border-primary" />
      </label>
    </div>
  </div>

  {/* Niveau 2 : le bouton, en dehors de la ligne des colonnes, donc sur sa propre ligne */}
  <Button type="submit" variant="primary">Envoyer</Button>
</form>
      </div>
    </section>
  );
}