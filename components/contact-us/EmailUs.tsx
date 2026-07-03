import Button from "../UI/Button";

export default function EmailUs() {
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
          d="M22 6C22 4.9 21.1 4 20 4H4C2.9 4 2 4.9 2 6V18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6ZM20 6L12 10.99L4 6H20ZM20 18H4V8L12 13L20 8V18Z"
          fill="#0C0C0C"
        />
      </svg>
      <h6 className="text-black">Email Us</h6>
      <p className="text-body-xs text-black">
        You are welcome to send us an email
      </p>
      <Button variant="transparetWithBorderPrimary" className="w-full py-2">
        Send Email
      </Button>
    </div>
  );
}
