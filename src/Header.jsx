import { LogoutLink } from "./LogoutLink";

export function Header() {
  return (
    <header>
      <nav>
        <a href="/">Home</a>
        <br />
        {localStorage.jwt === undefined ? (
          <>
            <a href="/signup">Sign Up</a> <br /> <a href="/login">Login</a>
          </>
        ) : (
          <>
            <LogoutLink />
          </>
        )}
      </nav>
    </header>
  );
}
