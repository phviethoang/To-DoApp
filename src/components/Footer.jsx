import React from "react";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer>
      <p>Copyright ⓒ {year} by PVH to TLP with ❤ </p>
    </footer>
  );
}

export default Footer;
