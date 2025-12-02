const Footer = () => {
  return (
    <footer className="border-t border-border py-8 px-4">
      <div className="container mx-auto max-w-7xl text-center text-sm text-muted-foreground">
        <p>© {new Date().getFullYear()} Jay Logan. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
