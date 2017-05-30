package net.minecraft.server;

public abstract class IRecipe implements Comparable<IRecipe> {

    protected String a;
    public MinecraftKey key; // CraftBukkit

    public IRecipe() {
        this("");
    }

    public IRecipe(String s) {
        this.a = s;
    }

    public abstract boolean a(InventoryCrafting inventorycrafting, World world);

    public abstract ItemStack craftItem(InventoryCrafting inventorycrafting);

    public abstract ItemStack b();

    public abstract NonNullList<ItemStack> b(InventoryCrafting inventorycrafting);

    public boolean c() {
        return false;
    }

    public int a(IRecipe irecipe) {
        return this.key.toString().compareTo(irecipe.key.toString()); // CraftBukkit
    }

    public int compareTo(IRecipe object) { // CraftBukkit - decompile error
        return this.a((IRecipe) object);
    }

    // CraftBukkit start
    @Override
    public boolean equals(Object obj) {
        return obj instanceof IRecipe && key.equals(((IRecipe) obj).key);
    }

    @Override
    public int hashCode() {
        return key.hashCode();
    }

    public abstract org.bukkit.inventory.Recipe toBukkitRecipe();
    // CraftBukkit end
}
