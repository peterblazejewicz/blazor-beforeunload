"use strict";
var BeforeUnload = /** @class */ (function () {
    function BeforeUnload() {
        this.beforeUnloadHandler = this.beforeUnloadHandler.bind(this);
        this.addEventListener = this.addEventListener.bind(this);
        this.removeEventListener = this.removeEventListener.bind(this);
    }
    BeforeUnload.prototype.addEventListener = function (instance) {
        this.removeEventListener();
        this.instance = instance;
        window.addEventListener("beforeunload", this.beforeUnloadHandler, false);
    };
    BeforeUnload.prototype.removeEventListener = function () {
        window.removeEventListener("beforeunload", this.beforeUnloadHandler, false);
    };
    BeforeUnload.prototype.beforeUnloadHandler = function (e) {
        if (this.instance) {
            var args = this.instance.invokeMethod("OnBeforeUnload", e);
            if (args) {
                e.preventDefault();
                e.returnValue = args.returnValue;
            }
        }
    };
    return BeforeUnload;
}());
window.BeforeUnloadInterop =
    window.BeforeUnloadInterop || new BeforeUnload();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQmVmb3JlVW5sb2FkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vaW50ZXJvcC9CZWZvcmVVbmxvYWQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBO0lBR0U7UUFDRSxJQUFJLENBQUMsbUJBQW1CLEdBQUcsSUFBSSxDQUFDLG1CQUFtQixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUMvRCxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsSUFBSSxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN6RCxJQUFJLENBQUMsbUJBQW1CLEdBQUcsSUFBSSxDQUFDLG1CQUFtQixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNqRSxDQUFDO0lBRUQsdUNBQWdCLEdBQWhCLFVBQWlCLFFBQWE7UUFDNUIsSUFBSSxDQUFDLG1CQUFtQixFQUFFLENBQUM7UUFDM0IsSUFBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUM7UUFDekIsTUFBTSxDQUFDLGdCQUFnQixDQUFDLGNBQWMsRUFBRSxJQUFJLENBQUMsbUJBQW1CLEVBQUUsS0FBSyxDQUFDLENBQUM7SUFDM0UsQ0FBQztJQUVELDBDQUFtQixHQUFuQjtRQUNFLE1BQU0sQ0FBQyxtQkFBbUIsQ0FBQyxjQUFjLEVBQUUsSUFBSSxDQUFDLG1CQUFtQixFQUFFLEtBQUssQ0FBQyxDQUFDO0lBQzlFLENBQUM7SUFFRCwwQ0FBbUIsR0FBbkIsVUFBb0IsQ0FBb0I7UUFDdEMsSUFBSSxJQUFJLENBQUMsUUFBUSxFQUFFO1lBQ2pCLElBQU0sSUFBSSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsWUFBWSxDQUFDLGdCQUFnQixFQUFFLENBQUMsQ0FBQyxDQUFDO1lBQzdELElBQUksSUFBSSxFQUFFO2dCQUNSLENBQUMsQ0FBQyxjQUFjLEVBQUUsQ0FBQztnQkFDbkIsQ0FBQyxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDO2FBQ2xDO1NBQ0Y7SUFDSCxDQUFDO0lBQ0gsbUJBQUM7QUFBRCxDQUFDLEFBNUJELElBNEJDO0FBTUQsTUFBTSxDQUFDLG1CQUFtQjtJQUN4QixNQUFNLENBQUMsbUJBQW1CLElBQUksSUFBSSxZQUFZLEVBQUUsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImNsYXNzIEJlZm9yZVVubG9hZCB7XG4gIHByaXZhdGUgaW5zdGFuY2U6IGFueSB8IHVuZGVmaW5lZDtcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLmJlZm9yZVVubG9hZEhhbmRsZXIgPSB0aGlzLmJlZm9yZVVubG9hZEhhbmRsZXIuYmluZCh0aGlzKTtcbiAgICB0aGlzLmFkZEV2ZW50TGlzdGVuZXIgPSB0aGlzLmFkZEV2ZW50TGlzdGVuZXIuYmluZCh0aGlzKTtcbiAgICB0aGlzLnJlbW92ZUV2ZW50TGlzdGVuZXIgPSB0aGlzLnJlbW92ZUV2ZW50TGlzdGVuZXIuYmluZCh0aGlzKTtcbiAgfVxuXG4gIGFkZEV2ZW50TGlzdGVuZXIoaW5zdGFuY2U6IGFueSkge1xuICAgIHRoaXMucmVtb3ZlRXZlbnRMaXN0ZW5lcigpO1xuICAgIHRoaXMuaW5zdGFuY2UgPSBpbnN0YW5jZTtcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImJlZm9yZXVubG9hZFwiLCB0aGlzLmJlZm9yZVVubG9hZEhhbmRsZXIsIGZhbHNlKTtcbiAgfVxuXG4gIHJlbW92ZUV2ZW50TGlzdGVuZXIoKSB7XG4gICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJiZWZvcmV1bmxvYWRcIiwgdGhpcy5iZWZvcmVVbmxvYWRIYW5kbGVyLCBmYWxzZSk7XG4gIH1cblxuICBiZWZvcmVVbmxvYWRIYW5kbGVyKGU6IEJlZm9yZVVubG9hZEV2ZW50KSB7XG4gICAgaWYgKHRoaXMuaW5zdGFuY2UpIHtcbiAgICAgIGNvbnN0IGFyZ3MgPSB0aGlzLmluc3RhbmNlLmludm9rZU1ldGhvZChcIk9uQmVmb3JlVW5sb2FkXCIsIGUpO1xuICAgICAgaWYgKGFyZ3MpIHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBlLnJldHVyblZhbHVlID0gYXJncy5yZXR1cm5WYWx1ZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuaW50ZXJmYWNlIFdpbmRvdyB7XG4gIEJlZm9yZVVubG9hZEludGVyb3A6IEJlZm9yZVVubG9hZDtcbn1cblxud2luZG93LkJlZm9yZVVubG9hZEludGVyb3AgPVxuICB3aW5kb3cuQmVmb3JlVW5sb2FkSW50ZXJvcCB8fCBuZXcgQmVmb3JlVW5sb2FkKCk7XG4iXX0=