import Container from "../atoms/Container";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="kontak" className="section-footer p-6">
      <Container className="flex flex-col justify-center items-center gap-2">
        <p>Made with <span className="text-red-500">❤️</span> by{' '}
        <a href="https://thomaskurniawan.com" target="_blank" rel="noopener noreferrer">
          tomisedunia
        </a></p>
        <p>© {currentYear} tomisedunia. All rights reserved.</p>
      </Container>
    </footer>
  );
}
