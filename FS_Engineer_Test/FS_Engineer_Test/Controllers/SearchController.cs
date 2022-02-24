using FS_Engineer_Test.Models;
using FS_Engineer_Test.Repo.Interfaces;
using Microsoft.AspNetCore.Mvc;
using System.Threading.Tasks;

namespace FS_Engineer_Test.Controllers
{
    [Route("[controller]")]
    [ApiController]
    public class SearchController : ControllerBase
    {
        private readonly IChuckRepo _chuckRepo;
        private readonly ISwapiRepo _swapiRepo;

        public SearchController(IChuckRepo chuckRepo, ISwapiRepo swapiRepo)
        {
            _chuckRepo = chuckRepo;
            _swapiRepo = swapiRepo;
        }

        [HttpGet("{query}")]
        public async Task<ActionResult<SearchResponse>> GetChuckOrSwapiByQuery([FromRoute] string query)
        {
            ChuckSearchResponse chuckSearchResponse = await _chuckRepo.SearchChuckJokes(query);
            SwapiSearchResponse swapiSearchResponse = await _swapiRepo.SearchSwapiPeople(query);
            SearchResponse searchResponse = new SearchResponse();
            searchResponse.ChuckSearchResponse = chuckSearchResponse;
            searchResponse.SwapiSearchResponse = swapiSearchResponse;
            if (searchResponse.ChuckSearchResponse.Total == 0 && searchResponse.SwapiSearchResponse.Count == 0)
            {
                return NoContent();
            }
            return Ok(searchResponse);
        }
    }
}
