namespace NovaTech.Domain.Entities
{
    public class Usuario
    {
        public Guid cod_Usuario { get; set; }
        public string nom_Usuario { get; set; } = string.Empty;
        public string ape_Usuario { get; set; } = string.Empty;
        public string correoInst_Usuario { get; set; } = string.Empty;
        public string passwordHash_Usuario { get; set; } = string.Empty;

    }
}