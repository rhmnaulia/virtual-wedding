export default function Footer() {
  const Heart = () => {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-5 w-5"
        viewBox="0 0 20 20"
        fill="red"
      >
        <path
          fillRule="evenodd"
          d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
          clipRule="evenodd"
        />
      </svg>
    );
  };

  return (
    <footer>
      <div className="bg-secondary  text-white flex  items-center justify-center py-3">
        <div className="flex flex-row justify-center items-center  space-x-2  text-xs sm:text-sm dark:text-gray-400">
          <p className="font-sans">Made with</p>
          <Heart />
          <p className="font-sans">by</p>

          <p className="font-serif font-semibold">
            Karuna Wedding Planner {`© ${new Date().getFullYear()}`}
          </p>
        </div>
      </div>
    </footer>
  );
}
