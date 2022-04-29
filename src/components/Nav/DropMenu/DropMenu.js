import MainMenu from "../MainMenu/MainMenu";
import "./DropMenu.scss";

const DropMenu = ({ isEnter, onDropMenu, subMenuData }) => {
  return (
    <section
      data-id="dropMenu"
      className={`dropMenu ${!isEnter && "hidden"}`}
      onMouseEnter={e => onDropMenu(e)}
    >
      <ul className="menuWrap">
        {subMenuData.map(({ id, title, subMenu }) => (
          <MainMenu key={id} id={id} title={title} subMenu={subMenu} />
        ))}
      </ul>
    </section>
  );
};

export default DropMenu;
