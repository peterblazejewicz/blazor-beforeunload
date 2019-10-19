using blazejewicz.Blazor.BeforeUnload;
using Microsoft.Extensions.DependencyInjection;

namespace Microsoft.Extensions.DependencyInjection
{
    public static class BeforeUnloadExtensions
    {
        public static IServiceCollection AddBeforeUnload(this IServiceCollection services)
        {
            return services.AddSingleton<BeforeUnload>();
        }
    }
}
