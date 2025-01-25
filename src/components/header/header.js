import ArrowDownIcon from "@mui/icons-material/ArrowCircleDownRounded";
import "./header.scss";

function Header() {
  function jumpToFirstSection() {
    const firstSection = document.querySelector(".site-main");
    firstSection.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest",
    });
  }

  return (
    <header className="site-header">
      <div className="site-header_title">
        <h1>Frances Morrison</h1>
        <p>Software Developer</p>
        <ArrowDownIcon
          sx={{
            color: "var(--interactive-color)",
            fontSize: 50,
            cursor: "pointer",
          }}
          onClick={jumpToFirstSection}
        />
      </div>
    </header>
  );
}

export default Header;
