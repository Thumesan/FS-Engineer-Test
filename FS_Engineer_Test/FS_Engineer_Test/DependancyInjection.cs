using FS_Engineer_Test.Repo;
using FS_Engineer_Test.Repo.Interfaces;
using Microsoft.Extensions.DependencyInjection;

namespace FS_Engineer_Test
{
    public static class DependancyInjection
    {
        public static void RegisterRepos(this IServiceCollection services)
        {
            services.AddScoped<IChuckRepo, ChuckRepo>();
            services.AddScoped<ISwapiRepo, SwapiRepo>();
        }

    }
}
