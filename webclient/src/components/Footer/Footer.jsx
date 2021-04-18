import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer>
      <div className={styles.container}>
        <div className={styles.columnsFooter}>
          <div className={styles.aboutFooter}>
            <h4>About Us</h4>
            <a href="#" className={styles.linkFooter}>
              Lorem ipsum
            </a>
            <a href="#" className={styles.linkFooter}>
              Lorem ipsum
            </a>
            <a href="#" className={styles.linkFooter}>
              Lorem ipsum
            </a>
            <a href="#" className={styles.linkFooter}>
              Lorem ipsum
            </a>
          </div>
          <div className={styles.contactFooter}>
            <h4>Contact</h4>
            <a href="#" className={styles.linkFooter}>
              Lorem ipsum
            </a>
            <a href="#" className={styles.linkFooter}>
              Lorem ipsum
            </a>
            <a href="#" className={styles.linkFooter}>
              Lorem ipsum
            </a>
            <a href="#" className={styles.linkFooter}>
              Lorem ipsum
            </a>
          </div>
          <div className={styles.socialFooter}>
            <h4>Follow us</h4>
            <div className={styles.iconsBox}>
              <a
                href="https://www.instagram.com"
                className={styles.iconIntagram}
              />
              <a
                href="https://www.facebook.com"
                className={styles.iconfacebook}
              />
              <a
                href="https://www.youtube.com/"
                className={styles.iconYoutube}
              />
            </div>
          </div>
        </div>
        <div className={styles.copyright}>
          <p>Copyright © 2021</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
