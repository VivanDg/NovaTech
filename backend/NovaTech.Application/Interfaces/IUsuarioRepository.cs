using NovaTech.Domain.Entities;

namespace NovaTech.Application.Interfaces;
public interface IUsuarioRepository
{
    Task<Usuario?> ObtenerPorCorreoAsync(string correo);
}