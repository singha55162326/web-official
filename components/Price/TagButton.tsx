const TagButton = ({ href = "#0", text }: { href?: string; text: string }) => {
  return (
    <a
      href={href}
      className="bg-white shadow-md mb-3 mr-3 inline-flex items-center justify-center rounded-md px-4 py-2 text-sm text-black duration-300 hover:bg-primary hover:text-white dark:bg-[#2C303B] dark:text-white dark:hover:bg-primary"
    >
      {text}
    </a>
  );
};

export default TagButton;
