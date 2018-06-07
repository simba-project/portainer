function StackViewModel(data) {
  this.Id = data.Id;
  this.Type = data.Type;
  this.Name = data.Name;
  this.Checked = false;
  this.Env = data.Env ? data.Env : [];
  if (data.ResourceControl && data.ResourceControl.Id !== 0) {
    this.ResourceControl = new ResourceControlViewModel(data.ResourceControl);
  }
  this.External = false;
}

function ExternalStackViewModel(name, type) {
  this.Name = name;
  this.Type = type;
  this.External = true;
  this.Checked = false;
}
