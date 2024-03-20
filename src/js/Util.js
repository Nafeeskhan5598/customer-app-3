// Util.js

export const toggleMenuWidth = ({
    setMenuWidth,
    setPageContentWidth,
    setMenuDisplay,
    setPagesDisplay,
    setLogoDisplay,
    content,
  }) => {
    const newWidth = setMenuWidth((prevWidth) => (prevWidth === "24%" ? "5%" : "24%"));
    const contentWidth = setPageContentWidth((prevContentWidth) => (prevContentWidth === "100%" ? "95%" : "100%"));
    const newDisplay = setMenuDisplay((prevDisplay) => (prevDisplay === 'none' ? 'block' : 'none'));
    const newPagesDisplay = setPagesDisplay((prevPagesDisplay) => (prevPagesDisplay === 'none' ? 'block' : 'none'));
    const newLogoDisplay = setLogoDisplay((prevLogoDisplay) => (prevLogoDisplay === 'block' ? 'none' : 'block'));
  
    if (window.innerWidth <= 500) {
      if (content.style.display === "none" || content.style.display === "") {
        content.style.display = "block";
      } else {
        content.style.display = "none";
      }
    }
  
    return { newWidth, contentWidth, newDisplay, newPagesDisplay, newLogoDisplay };
  };
  