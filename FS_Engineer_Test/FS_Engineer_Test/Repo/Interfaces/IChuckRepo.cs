using FS_Engineer_Test.Models;
using System.Threading.Tasks;

namespace FS_Engineer_Test.Repo.Interfaces
{
    public interface IChuckRepo
    {
        Task<ChuckCategories> GetChuckCategories();
        Task<ChuckSearchResponse> SearchChuckJokes(string query);
        Task<ChuckJokes> GetRandomJokeByCategory(string category);
    }
}
