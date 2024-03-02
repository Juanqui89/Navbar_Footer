export const Footer = () => {
  return (
    <>
      <footer>
        <article className="rights">
          <p>&copy; All rights Reserved 2022</p>
          <p>
            Designed by{" "}
            <button className="btn-web">
              <a href="https://kodunity.xyz">Kodunity</a>
            </button>
          </p>
        </article>
        <button type="button" className="upbtn">
          <a href="#">
            <i className="bi bi-arrow-up-circle-fill fs-4 arrow"></i>
          </a>
        </button>
      </footer>
    </>
  );
};
