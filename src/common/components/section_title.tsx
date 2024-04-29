interface SectionTitleProps {
  title: string;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ title }) => {
  return (
    <div>
      <p className=" text-2xl ml-2 font-semibold">{title}</p>
      <div className="h-0.5 m-2 w-full bg-red-600 "></div>
    </div>
  );
};

export default SectionTitle;
