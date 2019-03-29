using BlazorBeforeUnload;
using Microsoft.Extensions.DependencyInjection;

namespace Microsoft.Extensions.DependencyInjection
{
    public static class BeforeUnloadExtensions
    {
        public static IServiceCollection AddBeforeUnloadAdapter(this IServiceCollection services)
        {
            return services.AddSingleton<BeforeUnloadAdapter>();
        }
    }
}
