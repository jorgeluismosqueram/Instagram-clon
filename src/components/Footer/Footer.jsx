import './Footer.css'
function Footer ({itemFooter }){
    return (
        <div className="footer">
            
            <ul>
                <li>
                    <a href="">{itemFooter}</a>
                </li>
            </ul>    
        </div>
    )

}
 function Footer2 ({otrosItem}){
    return (
        <div className="footer">
            
            <ul>
                <li>
                    <a href="">{otrosItem}</a>
                </li>
            </ul>    
        </div>
    )
 }
export {Footer, Footer2};
