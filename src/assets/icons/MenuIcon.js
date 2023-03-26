import SvgIcon from "@mui/material/SvgIcon";

export default function MenuIcon(props) {
  return (
    <SvgIcon
      {...props}
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect opacity="0.01" width="32" height="32" fill="currentColor" />
      <path d="M3 8H29" stroke="currentColor" strokeWidth="3" />
      <path d="M3 16H29" stroke="currentColor" strokeWidth="3" />
      <path d="M3 24H29" stroke="currentColor" strokeWidth="3" />
    </SvgIcon>
  );
}
