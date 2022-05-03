import MainMenu from "../MainMenu/MainMenu";
import "./DropMenu.scss";

const DropMenu = ({ isEnter, onDropMenu, subMenuData }) => {
  return (
    <section
      data-id="dropMenu"
      className={`dropMenu ${!isEnter && "hidden"}`}
      onMouseEnter={onDropMenu}
    >
      <ul className="menuWrap">
        {subMenuData.map(({ id, title, title_en, subMenu }) => (
          <MainMenu
            key={id}
            title_en={title_en}
            title={title}
            subMenu={subMenu}
          />
        ))}
      </ul>
    </section>
  );
};

export default DropMenu;
