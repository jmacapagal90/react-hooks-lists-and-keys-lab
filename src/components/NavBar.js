import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];

    const AnchorLink = links.map((link) => {
      return <a key={link} href={`#${link}`}>{link}</a>
  })
  
  return <nav>{AnchorLink}</nav>;
}

export default NavBar;
