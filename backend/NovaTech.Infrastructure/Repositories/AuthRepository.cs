using Microsoft.EntityFrameworkCore;
using NovaTech.Domain.Entities;
using NovaTech.Infrastructure.Data;
using NovaTech.Application.Interfaces;
public class UsuarioRepository : IUsuarioRepository
{
    private readonly AppDbContext _context;

    public UsuarioRepository(AppDbContext context)
    {
        _context = context;
    }

    public async Task<Usuario?> ObtenerPorCorreoAsync(string correo)
    {
        return await _context.Usuarios
            .FirstOrDefaultAsync(u => u.correoInst_Usuario == correo);
    }
}