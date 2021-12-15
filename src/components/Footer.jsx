export default function Footer() {
  return (
    <footer>
      <div className="bg-palewhite flex flex-col items-center justify-center ">
        <div className="flex my-3 space-x-2  text-gray-500 text-xl dark:text-gray-400">
          <div className="font-sans">Created By</div>
          <div className="font-typography">Karuna Wedding</div>

          <div>{`© ${new Date().getFullYear()}`}</div>
        </div>
      </div>
    </footer>
  );
}
