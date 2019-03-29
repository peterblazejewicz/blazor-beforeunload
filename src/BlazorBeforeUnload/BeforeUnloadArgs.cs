using System;

namespace BlazorBeforeUnload
{
    public class BeforeUnloadArgs : EventArgs
    {
        public bool CancelRequested { get; set; }
        public string ReturnValue { get; set; }
    }
}
