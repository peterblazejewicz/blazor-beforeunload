using Microsoft.AspNetCore.Components;
using Microsoft.AspNetCore.Components.Web;
using Microsoft.JSInterop;
using System;

namespace blazejewicz.Blazor.BeforeUnload
{
    public class BeforeUnload
    {
        private IJSRuntime JSRuntime { get; set; }

        private EventHandler<BeforeUnloadArgs> beforeUnloadHandler;

        public BeforeUnload(IJSRuntime JSRuntime)
        {
            this.JSRuntime = JSRuntime;
        }

        public event EventHandler<BeforeUnloadArgs> BeforeUnloadHandler
        {
            add
            {
                if (beforeUnloadHandler == null)
                {
                    this.JSRuntime.InvokeVoidAsync("BeforeUnloadInterop.addEventListener", DotNetObjectReference.Create(this)
                    );
                }
                beforeUnloadHandler += value;
            }
            remove
            {
                beforeUnloadHandler -= value;
                if (beforeUnloadHandler == null)
                {
                    this.JSRuntime.InvokeVoidAsync("BeforeUnloadInterop.removeEventListener");
                }
            }
        }

        [JSInvokable]
        public DotNetObjectReference<BeforeUnloadArgs> OnBeforeUnload(object e)
        {
            BeforeUnloadArgs args = new BeforeUnloadArgs();
            beforeUnloadHandler?.Invoke(this, args);
            if (args.CancelRequested)
            {
                return DotNetObjectReference.Create(args);
            }
            return null;
        }

    }
}
