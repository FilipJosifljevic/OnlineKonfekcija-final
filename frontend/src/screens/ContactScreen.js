import './ContactScreen.css';

const ContactScreen = () => {
    return (
        <div className="contactscreen">
            <h1 className="contactscreen__title">Contact Us</h1>
            <p className="contactscreen__info">Have any questions?Write us a message!</p>
            <div className="contactscreen__container">
                <div className="contactscreen__left">
                    <h3 className="left__title">Contact Information</h3>
                    <p className="left__undertext">Fill in your data and expect our response as soon as possible!</p>
                    <p className="left__phone">0123 456 789</p>
                    <p className="left__email">onlinekonfekcija@gmail.com</p>
                    <p className="left__location">123 Street</p>
                </div>
                <div className="contactscreen__right">

                </div>
            </div>  
        </div>
        
    )
};

export default ContactScreen;