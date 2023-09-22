import "./NavItem.css";

function NavItem({icon, action}){
    return(
        <div className="navItem">
            <div className="navItem-icon">
                <img src={icon} alt={action} />
            </div>
            <div className="navItem-action">
                <span>{action}</span>
            </div>
        </div>
    )
}

export default NavItem;