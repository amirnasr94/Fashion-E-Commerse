import Button from "../UI/Button";

export default function ChatWithUsBox() {
  return (
    <div className="bg-primary-25 flex flex-col gap-y-3 items-center justify-center p-5">
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M4 4H20V16H5.17L4 17.17V4ZM4 2C2.9 2 2.01 2.9 2.01 4L2 22L6 18H20C21.1 18 22 17.1 22 16V4C22 2.9 21.1 2 20 2H4ZM6 12H14V14H6V12ZM6 9H18V11H6V9ZM6 6H18V8H6V6Z"
          fill="#0C0C0C"
        />
      </svg>
      <h6 className="text-black">Chat With Us</h6>
      <p className="text-body-xs text-black">We are here and ready to chat</p>
      <Button variant="transparetWithBorderPrimary" className="w-full py-2">
        Start Chat
      </Button>
    </div>
  );
}
