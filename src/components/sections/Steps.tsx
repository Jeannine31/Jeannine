export default function Steps() {
  return (
    <section style={{padding: "80px 20px", textAlign: "center"}}>
      <h2 style={{fontSize: "32px", marginBottom: "40px"}}>
        Comment ça marche
      </h2>

      <div style={{
        display: "flex",
        justifyContent: "center",
        gap: "40px",
        flexWrap: "wrap"
      }}>
        
        <div style={{maxWidth: "200px"}}>
          <h3>1️⃣ Choisissez</h3>
          <p>Sélectionnez votre plat parmi les restaurants partenaires.</p>
        </div>

        <div style={{maxWidth: "200px"}}>
          <h3>2️⃣ Commandez</h3>
          <p>Passez commande simplement en ligne.</p>
        </div>

        <div style={{maxWidth: "200px"}}>
          <h3>3️⃣ Recevez</h3>
          <p>Votre repas est livré prêt à être dégusté.</p>
        </div>

      </div>
    </section>
  );
}