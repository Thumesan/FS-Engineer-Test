using FS_Engineer_Test.Models;
using FS_Engineer_Test.Repo.Interfaces;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Net.Http;
using System.Threading.Tasks;

namespace FS_Engineer_Test.Repo
{
    public class ChuckRepo : IChuckRepo
    {

        private static string ChuckUri = "https://api.chucknorris.io/jokes/categories";
        private static string ChuckSearchUri = "https://api.chucknorris.io/jokes/search?query=";
        private static string ChuckRandomJokeUri = "https://api.chucknorris.io/jokes/random?category=";


        public async Task<ChuckCategories> GetChuckCategories()
        {
            try
            {
                HttpClient Http = new HttpClient();
                HttpResponseMessage response = await Http.GetAsync(ChuckUri);
                response.EnsureSuccessStatusCode();
                string result = await response.Content.ReadAsStringAsync();
                IEnumerable<string> categories = JsonConvert.DeserializeObject<List<string>>(result);
                ChuckCategories chuckCategories = new ChuckCategories();
                chuckCategories.Categories = categories;
                return chuckCategories;

            }
            catch (Exception ex)
            {
                return null;
            }
        }

        public async Task<ChuckJokes> GetRandomJokeByCategory(string category)
        {
            try
            {
                HttpClient Http = new HttpClient();
                HttpResponseMessage response = await Http.GetAsync(ChuckRandomJokeUri + category);
                response.EnsureSuccessStatusCode();
                string result = await response.Content.ReadAsStringAsync();
                ChuckJokes jokes = JsonConvert.DeserializeObject<ChuckJokes>(result);
                return jokes;
            }
            catch (Exception)
            {
                return null;
            }
        }

        public async Task<ChuckSearchResponse> SearchChuckJokes(string query)
        {
            try
            {
                HttpClient Http = new HttpClient();
                HttpResponseMessage response = await Http.GetAsync(ChuckSearchUri + query);
                response.EnsureSuccessStatusCode();
                string result = await response.Content.ReadAsStringAsync();
                ChuckSearchResponse searchResponse = JsonConvert.DeserializeObject<ChuckSearchResponse>(result);
                return searchResponse;
            }
            catch (Exception)
            {
                return null;
            }
        }
    }
}
