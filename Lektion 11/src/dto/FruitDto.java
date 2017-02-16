package dto;

public class FruitDto {
	private String key;
	private String name;
	
	public String getName() {
		return name;
	}
	public void setname(String name) {
		this.name = name;
	}
	public String getKey() {
		return key;
	}
	public void setKey(String name) {
		this.key = name;
	}
	@Override
	public String toString() {
		return "FruitDto [key=" + key + ", name=" + name + "]";
	}

}
