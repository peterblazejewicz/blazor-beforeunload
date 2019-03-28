using Microsoft.JSInterop;
using System.Threading.Tasks;

namespace BlazorBeforeUnload
{
    public class BeforeUnloadAdapter
    {
        private readonly IJSRuntime _jsRuntime;

        public BeforeUnloadAdapter(IJSRuntime jsRuntime)
        {
            _jsRuntime = jsRuntime;
        }

        private EventHandler<EventHandlerArgs> _BeforeUnloadHandler;

        public event EventHandler<EventHandlerArgs> BeforeUnloadHandler
        {
            add
            {
                if (_BeforeUnloadHandler == null)
                {
                    this._jsRuntime.InvokeAsync<object>(
                        "BeforeUnloadAdapter.AddEventListener",
                        new DotNetObjectRef(this)
                    );
                }
                _BeforeUnloadHandler += value;
            }
            remove
            {
                _BeforeUnloadHandler -= value;
                if (_BeforeUnloadHandler == null)
                {
                    this._jsRuntime.InvokeAsync<object>("BeforeUnloadAdapter.RemoveEventListener");
                }
            }
        }

        [JSInvokable]
        public virtual void OnBeforeUnload(object e)
            => _BeforeUnloadHandler?.Invoke(this, EventArgs.Empty);
    }
}
