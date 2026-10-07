using NovaTech.Application.common.DTOs;

namespace NovaTech.Application.Interfaces;

public interface IAuthService
{
    Task<LoginResponseDTO> LoginAsync(LoginDTO login);
}