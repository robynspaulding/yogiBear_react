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
            <br />
            <a href="/yogis/new">Admin: Add New Yogi</a>
            <br />
            <a href="/bookings">View Your Bookings</a>
          </>
        )}
      </nav>
    </header>
  );
}
