import { Typography } from "antd";
const Footer = () => {
  return (
    <div className=" h-[50px] mt-10 bg-slate-50 flex justify-evenly items-center text-black ">
      <Typography.Link href="tel: +12345678">+12345678</Typography.Link>
      <Typography.Link href="https://www.google.com" target={"_blank"}
       style={{ color: "red" }}>
        Privacy Policy
      </Typography.Link>
      <Typography.Link href="https://www.google.com" target={"_blank"}>Rules</Typography.Link>
    </div>
  );
};
export default Footer;

