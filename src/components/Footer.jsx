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
      <div className="bg-palewhite flex  items-center justify-center ">
        <div className="flex flex-col sm:flex-row justify-center items-center my-3 space-x-2  text-gray-500 text-xs sm:text-sm dark:text-gray-400">
          <p className="font-sans">
            We help you to create your sweet ending to a new beginning
          </p>
          <Heart />
          <b className="font-typography text-xl">
            Karuna Wedding Planner {`© ${new Date().getFullYear()}`}
          </b>
        </div>
      </div>
    </footer>
  );
}
