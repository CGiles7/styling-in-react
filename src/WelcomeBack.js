import "./WelcomeBack.css";

function WelcomeBack({ name = "valued customer" }) {
  return (
    <p>
      Welcome back, <span className="username">{name}</span>!
    </p>
  );
}

export default WelcomeBack;