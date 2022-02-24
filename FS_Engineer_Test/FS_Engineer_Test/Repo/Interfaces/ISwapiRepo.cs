using FS_Engineer_Test.Models;
using System.Threading.Tasks;

namespace FS_Engineer_Test.Repo.Interfaces
{
    public interface ISwapiRepo
    {
        Task<SwapiPeople> GetSwapiPeople();
        Task<SwapiSearchResponse> SearchSwapiPeople(string query);
    }
}
