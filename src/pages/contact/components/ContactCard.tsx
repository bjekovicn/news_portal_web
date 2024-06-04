const ContactCard: React.FC<{
  title: string;
  subtitle: string;
  link: string;
  children: React.ReactNode;
}> = ({ title, subtitle, children, link }) => {
  return (
    <div className="shadow-lg bg-gray-200 bg-opacity-20 m-2 px-6 py-6 items-center flex flex-row  justify-start gap-8">
      <div className="bg-[#24252f] p-6 rounded-md text-white">{children}</div>
      <div className="gap-1 flex flex-col  items-start">
        <p className="font-bold">{title}</p>
        <p>{subtitle}</p>
        <p className="font-semibold">{link}</p>
      </div>
    </div>
  );
};

export default ContactCard;
