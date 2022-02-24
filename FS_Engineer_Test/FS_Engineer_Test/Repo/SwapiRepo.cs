using FS_Engineer_Test.Models;
using FS_Engineer_Test.Repo.Interfaces;
using Newtonsoft.Json;
using System;
using System.Net.Http;
using System.Threading.Tasks;

namespace FS_Engineer_Test.Repo
{
    public class SwapiRepo : ISwapiRepo
    {
        private static string SwapiUri = "https://swapi.dev/api/people/";
        private static string SwapiSearchUri = "https://swapi.dev/api/people/?search=";

        public async Task<SwapiPeople> GetSwapiPeople()
        {
            try
            {
                HttpClient Http = new HttpClient();
                HttpResponseMessage response = await Http.GetAsync(SwapiUri);
                response.EnsureSuccessStatusCode();
                string result = await response.Content.ReadAsStringAsync();
                SwapiPeople swapiPeople = JsonConvert.DeserializeObject<SwapiPeople>(result);
                return swapiPeople;

            }
            catch (Exception)
            {
                return null;
            }
        }

        public async Task<SwapiSearchResponse> SearchSwapiPeople(string query)
        {
            try
            {
                HttpClient Http = new HttpClient();
                HttpResponseMessage response = await Http.GetAsync(SwapiSearchUri + query);
                response.EnsureSuccessStatusCode();
                string result = await response.Content.ReadAsStringAsync();
                SwapiSearchResponse swapiSearchResponse = JsonConvert.DeserializeObject<SwapiSearchResponse>(result);
                return swapiSearchResponse;
            }
            catch (Exception)
            {
                return null;
            }
        }
    }
}
