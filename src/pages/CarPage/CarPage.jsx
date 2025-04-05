import Container from "../../components/Container/Container";
import css from "./CarPage.module.css";
import carImg from "../../images/car-image.jpg";
import Button from "../../components/Button/Button";
import {
  CalendarIcon,
  CheckIcon,
  LocationIcon,
  CarIcon,
  FuelPumpIcon,
  GearIcon,
} from "../../assets/Icons/Icons";

const CarPage = () => {
  return (
    <Container>
      <h2 className="visually-hidden">Car Page</h2>
      <div className={css.wrapper}>
        <div className={css.leftColumn}>
          <img
            src={carImg}
            alt="Buick Enclave"
            className={css.carImage}
          />
          <form className={css.form}>
            <h3 className={css.formTitle}>
              Book your car now
            </h3>
            <p className={css.formText}>
              Stay connected! We are always ready to help
              you.
            </p>
            <div className={css.inputsWrap}>
              <input
                type="text"
                placeholder="Name*"
                required
              />
              <input
                type="email"
                placeholder="Email*"
                required
              />
              <input
                type="date"
                placeholder="Booking date"
              />
              <textarea placeholder="Comment"></textarea>
            </div>
            {/* <button type="submit">Send</button> */}
            <Button
              text="Send"
              narrow
              type="submit"
            />
          </form>
        </div>

        <div className={css.rightColumn}>
          <div className={css.carMain}>
            <h3 className={css.carName}>
              Buick Enclave, 2008
            </h3>
            <span className={css.carId}>Id: 9582</span>
          </div>
          <p className={css.location}>
            <LocationIcon /> Kyiv, Ukraine
            &nbsp;&nbsp;&nbsp; Mileage: 5,858 km
          </p>
          <p className={css.price}>$40</p>
          <p className={css.description}>
            The Buick Enclave is a stylish and spacious SUV
            known for its comfortable ride and luxurious
            features.
          </p>

          <div className={css.section}>
            <h4 className={css.sectionTitle}>
              Rental Conditions:
            </h4>
            <ul>
              <li className={css.listItem}>
                <CheckIcon /> Minimum age: 25
              </li>
              <li className={css.listItem}>
                <CheckIcon /> Security deposit required
              </li>
              <li className={css.listItem}>
                <CheckIcon /> Valid driver's license
              </li>
            </ul>
          </div>

          <div className={css.section}>
            <h4 className={css.sectionTitle}>
              Car Specifications:
            </h4>
            <ul>
              <li className={css.listItem}>
                <CalendarIcon /> Year: 2008
              </li>
              <li className={css.listItem}>
                <CarIcon /> Type: SUV
              </li>
              <li className={css.listItem}>
                <FuelPumpIcon /> Fuel Consumption: 10.5
              </li>
              <li className={css.listItem}>
                <GearIcon /> Engine Size: 3.6L V6
              </li>
            </ul>
          </div>

          <div className={css.section}>
            <h4 className={css.sectionTitle}>
              Accessories and functionalities:
            </h4>
            <ul>
              <li className={css.listItem}>
                <CheckIcon /> Leather seats
              </li>
              <li className={css.listItem}>
                <CheckIcon /> Panoramic sunroof
              </li>
              <li className={css.listItem}>
                <CheckIcon /> Remote start
              </li>
              <li className={css.listItem}>
                <CheckIcon /> Blind-spot monitoring
              </li>
              <li className={css.listItem}>
                <CheckIcon /> Power liftgate
              </li>
              <li className={css.listItem}>
                <CheckIcon /> Premium audio system
              </li>
            </ul>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default CarPage;
