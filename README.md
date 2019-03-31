# blazor-beforeunload

Blazor hook into native Window beforeunload with async/await and cancel support

## Example usage

In your startup configuration configure DI:

```cs
public void ConfigureServices(IServiceCollection services)
{
    services.AddBeforeUnloadAdapter();
}
```

In your client pages use the instance via dependency injection:

```razor
@page "/counter"

@using blazejewicz.Blazor.BeforeUnload
@using System
@implements IDisposable
@inject BeforeUnloadAdapter BeforeUnloadAdapter
```

```cs
protected override void OnInit()
{
    BeforeUnloadAdapter.BeforeUnloadHandler += BeforeUnloadHandler;
}

public void Dispose()
{
    BeforeUnloadAdapter.BeforeUnloadHandler -= BeforeUnloadHandler;
}

void BeforeUnloadHandler(object sender, BeforeUnloadArgs args)
{
    args.CancelRequested = true;
    args.ReturnValue = "Please save your data";
}
```

## Author

@peterblazejewicz
