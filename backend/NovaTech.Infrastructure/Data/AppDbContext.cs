using Microsoft.EntityFrameworkCore;
using NovaTech.Domain.Entities;

namespace NovaTech.Infrastructure.Data
{
    public class AppDbContext : DbContext
    {
        public AppDbContext(DbContextOptions<AppDbContext> options)
            : base(options)
        {
        }

        public DbSet<Usuario> Usuarios { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Usuario>()
                .HasKey(u => u.cod_Usuario);

            base.OnModelCreating(modelBuilder);
        }
    }
}