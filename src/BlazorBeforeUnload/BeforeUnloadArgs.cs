using System;

namespace blazejewicz.Blazor.BeforeUnload
{
    public class BeforeUnloadArgs : EventArgs
    {
        public bool CancelRequested { get; set; }
        public string ReturnValue { get; set; }
    }
}
