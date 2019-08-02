using Microsoft.JSInterop;
using System;

namespace blazejewicz.Blazor.BeforeUnload
{
    public class BeforeUnloadAdapter
    {
        private readonly IJSRuntime jsRuntime;

        public BeforeUnloadAdapter(IJSRuntime jsRuntime)
        {
            Console.WriteLine(nameof(BeforeUnloadAdapter));
            this.jsRuntime = jsRuntime;
        }

        private EventHandler<BeforeUnloadArgs> beforeUnloadHandler;

        public event EventHandler<BeforeUnloadArgs> BeforeUnloadHandler
        {
            add
            {
                if (beforeUnloadHandler == null)
                {

                    this.jsRuntime.InvokeAsync<object>("BeforeUnloadAdapter.addEventListener", DotNetObjectRef.Create(this)
                    );
                }
                beforeUnloadHandler += value;
            }
            remove
            {
                beforeUnloadHandler -= value;
                if (beforeUnloadHandler == null)
                {
                    this.jsRuntime.InvokeAsync<object>("BeforeUnloadAdapter.removeEventListener");
                }
            }
        }

        [JSInvokable]
        public virtual DotNetObjectRef<BeforeUnloadArgs> OnBeforeUnload(object e)
        {
            BeforeUnloadArgs args = new BeforeUnloadArgs();
            beforeUnloadHandler?.Invoke(this, args);
            if (args.CancelRequested)
            {
                return DotNetObjectRef.Create(args);
            }
            return null;
        }

    }
}
